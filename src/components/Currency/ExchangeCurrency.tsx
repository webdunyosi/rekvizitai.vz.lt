"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useCurrency, useCurrencyRates } from "../../../hooks/useCurrency";
import BlurFade from "@/components/magicui/blur-fade";

// Array of currency codes
const CURRENCY_OPTIONS = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "AED",
  "AFN",
  "ALL",
  "AMD",
];

export function ExchangeCurrency() {
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const {
    data: ratesData,
    isLoading: ratesLoading,
    refetch: refetchRates,
  } = useCurrencyRates(baseCurrency);
  const { data: exchangeData, isLoading: exchangeLoading } = useCurrency({
    base_currency: baseCurrency,
    target_currency: targetCurrency,
  });

  const exchangeRate = exchangeData?.target_rate || 0;
  const exchangeResult =
    amount && exchangeRate ? (Number(amount) * exchangeRate).toFixed(2) : "";

  useEffect(() => {
    refetchRates();
  }, [baseCurrency, refetchRates]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleBaseCurrencyChange = (value: string) => {
    setBaseCurrency(value);
  };

  const handleTargetCurrencyChange = (value: string) => {
    setTargetCurrency(value);
  };

  return (
    <Card className="h-fit w-full bg-gradient-to-b from-gray-100 to-gray-300/80">
      <CardHeader>
        <CardTitle>Currency Exchange</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          {ratesLoading ? (
            <Label className="mb-4 h-[174px] text-lg">Loading rates...</Label>
          ) : (
            <div className="grid gap-2">
              <Label className="pb-2 text-lg">Exchange Rates</Label>
              {ratesData?.rates.map((rate, index) => (
                <BlurFade key={index} delay={0.25 + index * 0.05} inView>
                  <div className="flex justify-between">
                    <span>
                      {rate.name} ({rate.currency})
                    </span>
                    <span>
                      {rate.rate.toFixed(2)} {ratesData.base_symbol}
                    </span>
                  </div>
                </BlurFade>
              ))}
            </div>
          )}
          <CardDescription>Type in amount to exchange</CardDescription>
          <Label htmlFor="amount">Amount</Label>
          <div className="flex items-center gap-2">
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <Select
              value={baseCurrency}
              onValueChange={handleBaseCurrencyChange}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder={baseCurrency} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Popular</SelectLabel>
                  {CURRENCY_OPTIONS.map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="exchange-to">Exchange To</Label>
          <div className="flex items-center gap-2">
            <Input
              id="exchange-to"
              type="number"
              placeholder="Exchange to"
              value={exchangeResult}
              disabled
              className="!bg-white"
            />
            <Select
              value={targetCurrency}
              onValueChange={handleTargetCurrencyChange}
            >
              <SelectTrigger className="w-24">
                <SelectValue placeholder={targetCurrency} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Popular</SelectLabel>
                  {CURRENCY_OPTIONS.filter(
                    (currency) => currency !== baseCurrency,
                  ).map((currency) => (
                    <SelectItem key={currency} value={currency}>
                      {currency}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
