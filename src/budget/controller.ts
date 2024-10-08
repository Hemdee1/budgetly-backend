import { RequestHandler } from "express";
import { budget } from "../utils/types";
import { PrismaClient } from "@prisma/client";
import sendMail from "../utils/emailSender";
import { render } from "@react-email/render";
import EmailReminder from "../../emails/email-reminder";
import React from "react";

const prisma = new PrismaClient();
export const createBudget: RequestHandler<
  unknown,
  unknown,
  budget,
  { user: string }
> = async (req, res) => {
  const userId = req.session.userId;
  const { user } = req.query;
  const {
    annualRent,
    gender,
    maritalStatus,
    modeOfTransport,
    monthlyIncome,
    categories,
    defaultCurrency,
  } = req.body;
  try {
    if (!userId) {
      return res.status(500).json("login to create a budget");
    }

    if (
      !(
        gender &&
        maritalStatus &&
        modeOfTransport &&
        monthlyIncome &&
        defaultCurrency &&
        categories
      )
    ) {
      return res.status(500).json("all credentials must be included");
    }

    const budget = await prisma.budget.create({
      data: {
        userId: userId,
        annualRent,
        gender,
        maritalStatus,
        modeOfTransport,
        monthlyIncome,
        defaultCurrency,
      },
      include: {
        user: true,
      },
    });

    // create categories
    const categoriesWithBudgetId = categories.map((category) => ({
      ...category,
      budgetId: budget.id,
    }));

    await prisma.category.createMany({
      data: categoriesWithBudgetId,
    });

    // create an income transaction
    await prisma.income.create({
      data: {
        amount: monthlyIncome,
        balance: monthlyIncome,
        title: "Monthly Income",
        budgetId: budget.id,
      },
    });

    // SEND EMAIL TEMPLATE
    const html = await render(React.createElement(EmailReminder));
    const data = {
      email: budget.user.email,
      subject: "Income Recorded Notification",
      html,
    };
    await sendMail(data);

    if (user) {
      return res.redirect("/user/autologin");
    }

    return res.status(200).json(budget);
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

export const deleteBudget: RequestHandler<
  unknown,
  unknown,
  unknown,
  { user: string }
> = async (req, res) => {
  const userId = req.session.userId;
  const { user } = req.query;

  try {
    if (!userId) {
      return res.status(500).json("login to delete a budget");
    }

    const budget = await prisma.budget.findFirst({
      where: { userId: userId },
    });

    if (budget) {
      await prisma.income.deleteMany({ where: { budgetId: budget.id } });
      await prisma.expense.deleteMany({ where: { budgetId: budget.id } });
      await prisma.category.deleteMany({ where: { budgetId: budget.id } });

      await prisma.budget.delete({ where: { id: budget.id } });
    }

    if (user) {
      return res.redirect("/user/autologin");
    }

    return res.status(200).json(budget);
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

export const getBudgets: RequestHandler = async (req, res) => {
  const userId = req.session.userId;
  try {
    if (!userId) {
      return res.status(500).json("login to create a budget");
    }
    const budgets = await prisma.budget.findFirst({
      where: { userId: userId },
    });

    return res.status(200).json(budgets);
  } catch (error: any) {
    console.log(error);
    res.status(400).json(error.message);
  }
};
