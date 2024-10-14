"use client";
import toast from "react-hot-toast";

import Link from "next/link";
import { ArrowUpRight, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Contact = () => {
  const contacts = [
    {
      title: "Whatsapp",
      contact: "+923261710249",
      link: "https://web.whatsapp.com/",
    },
    {
      title: "Github",
      contact: "mjunaid249",
      link: "https://github.com/mjunaid249",
    },
    {
      title: "Phone",
      contact: "+923261710249",
      link: "https://web.whatsapp.com/",
    },
    {
      title: "Location",
      contact: "Punjab, Pakistan",
      link: "https://www.google.com/maps/place/Punjab/@30.8745063,72.3551751,7z/data=!3m1!4b1!4m6!3m5!1s0x38df948974419acb:0x3a9e3018d24eeca0!8m2!3d31.1704063!4d72.7097161!16zL20vMDY1enI?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];
  return (
    <div
      id="contact"
      className="container mx-auto mt-16 w-[80%] flex flex-col gap-6"
    >
      <h1 class="text-3xl text-primary text-center font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] py-4">
        Contact Me
      </h1>
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Stay Connected</CardTitle>
          </div>
          <Button asChild size="sm" className="ml-auto gap-1">
            <Link href="https://github.com/mjunaid249" target="_blank">
              Github
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead className="hidden xl:table-column">Type</TableHead>
                <TableHead className="hidden xl:table-column">Status</TableHead>
                <TableHead className="hidden xl:table-column">Date</TableHead>
                <TableHead className="text-right">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((item, index) => {
                return (
                  <TableRow>
                    <TableCell>
                      <div className="font-medium flex items-center jus gap-3">
                        {item.title}
                        <Button
                          onClick={() => {
                            navigator.clipboard.writeText(item.contact);
                            toast.success("Copied to clipboard");
                          }}
                          size="sm"
                          variant="secondary"
                          className="text-sm mb-2"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className=" text-sm text-muted-foreground inline">
                        {item.contact}
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">
                      <Link
                        className="underline"
                        target="_blank"
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
