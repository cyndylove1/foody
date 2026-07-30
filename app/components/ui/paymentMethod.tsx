import { useState } from "react";
import RadioButton from "../radioButton";
import VisaIcon from "../visaIcon";
import Button from "../button";

interface Props {
  onSubmit: (value: { type: "card" | "" }) => void;
}

export default function PaymentForm({ onSubmit }: Props) {
  const [selectedPayment, setSelectedPayment] = useState<"card" | "">("");
  return (
    <div className="jakarta leading-[120%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ type: selectedPayment });
        }}
      >
        <div className="border-b-[1px] border-(--gray-200)">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-[12px]">
              <RadioButton
                checked={selectedPayment === "card"}
                onChange={() => setSelectedPayment("card")}
              />
              <div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <h2 className="text-[16px] font-[400] text-(--gray-900)">
                      Pay with cards
                    </h2>
                    <p className="text-[12px] font-[400] text-(--gray-400)">
                      You will be required to add your card details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[4px]">
              <h5 className="text-[11px] font-[400] text-(--gray-600)">
                We accept:
              </h5>
              <VisaIcon />
            </div>
          </div>
          <div className="mt-4 mb-6 gradient-border">
            <p className="text-[14px] font-[400] text-(--gray-800) gradient-border p-2">
              You will be redirected to our secure checkout page
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end p-6">
          <Button variant="primary">Confirm payment method</Button>
        </div>
      </form>
    </div>
  );
}
