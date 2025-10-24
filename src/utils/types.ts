import React from "react";

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Review {
  title: string;
  paragraph: string;
  name: string;
  img: string;
}

export interface Panel {
  image: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  type?: "button" | "submit";
  isSubmitting?: boolean;
  label: string;
  loadingLabel?: string;
  icon?: React.ReactNode;
}

export interface LinkButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}