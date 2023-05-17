import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InvoicesContext } from "./Invoices.context";
import Button from "./Button";
import Invoice from "./Invoice";
import Status from "./Status";
import type { InvoiceTypes } from "./types/invoiceTypes";

const Details = () => {
  const location = useLocation();
  const { invoiceData } = location.state;
  const navigate = useNavigate();
  const { invoices, setInvoices } = useContext(InvoicesContext);

  const deleteInvoice = () => {
    setInvoices((current: InvoiceTypes[]) =>
      current.filter((invoice) => invoice.id !== invoiceData.id)
    );
  };

  const markAsPaid = () => {
    setInvoices(
      invoices.map((obj) => {
        if (obj.id === invoiceData.id) {
          invoiceData.status = "paid";
          return { ...obj, status: "paid" };
        } else {
          return obj;
        }
      })
    );
  };

  return (
    <div className="m-auto w-[730px] pt-8">
      <Button
        goBack
        onClick={() => {
          navigate("/Invoice_app/");
        }}
      />
      <div className="mb-6 flex h-[88px] items-center justify-between rounded-lg bg-white px-8">
        <div className="flex gap-2">
          <h2 className="my-auto mr-4">Status</h2>
          <Status status={invoiceData.status}></Status>
        </div>
        <div className="flex gap-2">
          <Button color="grey" disabled={invoiceData.status === "paid"}>
            Edit
          </Button>
          <Button
            color="red"
            onClick={() => {
              deleteInvoice();
              navigate("/Invoice_app/");
            }}
          >
            Delete
          </Button>
          <Button
            color="purple"
            onClick={() => {
              markAsPaid();
            }}
            disabled={
              invoiceData.status === "paid" || invoiceData.draft === "draft"
            }
          >
            Mark as Paid
          </Button>
        </div>
      </div>
      <Invoice details invoice={invoiceData} />
    </div>
  );
};

export default Details;
