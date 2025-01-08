"use client"
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { Form, FormControl, FormField, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import IconArrowLeft from '@/components/icons/IconArrowLeft';
import { useRouter } from 'next/navigation';
import { buildApi } from '@/api/base';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
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
    }),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

const SignUp = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const apiUrl = buildApi('/auth/sign-up');
    const response = await axios.post(apiUrl, {
      body: values
    });
    console.log(response)
  }
  return (
    <div className={"flex flex-col gap-6"} >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Enter your details below to create your account and get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (

                    <div className='grid gap-2'>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  )}
                />
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
                        <Input {...field} type='password'/>
                      </FormControl>
                      <FormMessage />
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <div className='grid gap-2'>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input {...field} type='password'/>
                      </FormControl>
                      <FormMessage />
                    </div>
                  )}
                />
                <div className="flex flex-col gap-3">
                  <Button type="submit">Create account</Button>
                  <Button type="button" variant="outline" onClick={() => router.push('/sign-in')}><IconArrowLeft/> Back to login</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp