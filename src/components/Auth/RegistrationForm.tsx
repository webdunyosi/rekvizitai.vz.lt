"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Link from "next/link";
import { useRegister } from "../../../hooks/useAuth";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  name: z.string().min(1, { message: "This field has to be filled." }),
  firm: z.string().min(1, { message: "This field has to be filled." }),
  duties: z.string().min(1, { message: "This field has to be filled." }),
  phone: z.string().min(1, { message: "This field has to be filled." }),
  password: z
    .string()
    .min(8, "Password must contain at least 8 symbols")
    .regex(
      passwordRegex,
      "Минимум 8 символов, 1 заглавня, 1 прописная, 1 цифра и 1 специальный символ",
    ),
  confirmPassword: z.string().min(8, "Подтверждение пароля обязательно"),
});

export const RegistrationForm = ({ className }: { className?: string }) => {
  const { mutateAsync } = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      firm: "",
      duties: "",
      phone: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutateAsync({
      email: values.email,
      password: values.password,
      duties: values.duties,
      firm: values.firm,
      phone: values.phone,
    });
  }

  return (
    <Form {...form}>
      <form
        className={cn(
          "flex h-fit flex-col justify-around gap-4 rounded-md bg-gradient-to-b from-gray-100 to-gray-300/80 p-6",
          className,
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormLabel className="text-2xl font-semibold leading-none">
          New user registration
        </FormLabel>
        <FormDescription>
          {" "}
          Fields marked with an asterisk must be filled.
        </FormDescription>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <div className="flex gap-1">
                  <FormControl>
                    <Input
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <label
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer rounded py-2 font-mono text-sm text-gray-600"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-1">
                  <FormControl>
                    <Input
                      placeholder="Confirm password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                  </FormControl>
                  <label
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer rounded py-2 font-mono text-sm text-gray-600"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Firm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duties"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Duties" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-1">
          <Checkbox id="remember" className="rounded-md bg-white" />
          <label
            htmlFor="remember"
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-sm"
            onClick={() => setChecked(!checked)}
          >
            I have familiarized myself with the rules of XYZ company
          </label>
        </div>
        <Button className="bg-main-blue" disabled={!checked}>
          Register
        </Button>
      </form>
    </Form>
  );
};
