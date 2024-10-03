import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

const SignInCard = () => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader>
        <CardTitle>Login to continue</CardTitle>
      </CardHeader>
      <CardDescription>
        Use your email or another service to continue
      </CardDescription>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value=""
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value=""
            placeholder="Password"
            type="Password"
            required
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
