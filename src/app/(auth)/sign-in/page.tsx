"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(3, { message: 'Minimum 3 characters.' })
    .max(8, { message: 'Maximum 8 characters.' })
    .refine((value) => /[a-z]/.test(value), {
      message: 'Must have a lowercase letter.'
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Must have an uppercase letter.'
    })
    .refine((value) => /\d/.test(value), {
      message: 'Must have a number.'
    })
})

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className={"flex flex-col gap-6"} >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (

                    <div className='grid gap-2'>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <div className='grid gap-2'>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  )}
                />
                <div className='flex justify-between'>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Remember me</Label>
                  </div>
                  <Link className='text-sm font-medium' href="/forgot-password">Forgot password?</Link>
                </div>
                <Button type="submit">Login</Button>
                <span className='flex justify-center text-sm'>Don&apos;t have an account?&nbsp;<Link className='underline' href="/sign-up">Sign-up</Link></span>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn