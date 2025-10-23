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
  buttonText: string;
}