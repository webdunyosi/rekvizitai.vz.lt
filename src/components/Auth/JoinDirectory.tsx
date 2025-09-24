"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn, isSignedIn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLogin, useUser } from "../../../hooks/useAuth";
import { setUser, setToken } from "@/state/userSlice";
import Cookies from "js-cookie";
import Link from "next/link";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      passwordRegex,
      "Minimum 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
    ),
});

export const JoinDirectory = ({ className }: { className?: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const { mutateAsync } = useLogin();
  const { data: user } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setUserAuthenticated(isSignedIn());
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await mutateAsync({
        username: values.email,
        password: values.password,
      });

      const accessToken = response.data.access_token;

      if (user && accessToken) {
        dispatch(setUser(user));
        dispatch(setToken(accessToken));
      } else return;

      Cookies.set("token-client", accessToken);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert("Error: Incorrect login or password.");
      } else {
        alert("An unexpected error occurred: " + error);
      }
    }
  }

  return (
    <div className="flex h-fit flex-col justify-around gap-4 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-6">
      {userAuthenticated ? (
        <p>User signed in</p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn(className)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className="flex w-full items-center justify-between py-3">
                <div>
                  <Checkbox id="remember" className="rounded-md bg-white" />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <Link href={"/registration"}>Registration</Link>
              </div>
              <Button type="submit" className="w-full bg-main-blue">
                Login
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
