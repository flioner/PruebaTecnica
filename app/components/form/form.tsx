// Form.tsx
import React from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldError,
} from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import { rules } from "./rules"; // Import the single rules object

interface FormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

interface FormData {
  rfc: string;
  name?: string;
  surname?: string;
  birthdate?: string;
  commercialName?: string;
  incorporationDate?: string;
  businessType?: string;
}

const Form: React.FC<FormProps> = ({ isOpen, onOpenChange }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const rfcValue = watch("rfc");
  const isFisica = rfcValue?.toUpperCase()?.endsWith("X");
  const isRfcComplete = rfcValue?.length >= 10;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form submitted:", data);
  };

  const hasErrors = () => {
    const visibleErrors: string[] = [];

    if (errors.rfc) visibleErrors.push("rfc");

    if (isFisica) {
      if (errors.name) visibleErrors.push("name");
      if (errors.surname) visibleErrors.push("surname");
      if (errors.birthdate) visibleErrors.push("birthdate");
    }

    if (!isFisica) {
      if (errors.commercialName) visibleErrors.push("commercialName");
      if (errors.incorporationDate) visibleErrors.push("incorporationDate");
      if (errors.businessType) visibleErrors.push("businessType");
    }

    return visibleErrors.length > 0;
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Añadir Usuario</ModalHeader>
            <ModalBody className="flex flex-col gap-4">
              <Controller
                name="rfc"
                control={control}
                rules={rules.rfc}
                render={({ field }) => (
                  <div>
                    <Input
                      {...field}
                      placeholder="Enter RFC"
                      label="RFC"
                      value={field.value || ""}
                    />
                    {errors.rfc && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.rfc.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* Conditionally Render Fields Based on RFC */}
              {isRfcComplete && (
                <div className="flex flex-col gap-4">
                  {isFisica ? (
                    <>
                      <Controller
                        name="name"
                        control={control}
                        rules={rules.name}
                        render={({ field }) => (
                          <div>
                            <Input {...field} placeholder="Name" label="Name" />
                            {errors.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="surname"
                        control={control}
                        rules={rules.surname}
                        render={({ field }) => (
                          <div>
                            <Input
                              {...field}
                              placeholder="Surname"
                              label="Surname"
                            />
                            {errors.surname && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.surname.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="birthdate"
                        control={control}
                        rules={rules.birthdate}
                        render={({ field }) => (
                          <div>
                            <Input
                              {...field}
                              placeholder="Birthdate"
                              label="Birthdate"
                            />
                            {errors.birthdate && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.birthdate.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                    </>
                  ) : (
                    <>
                      <Controller
                        name="commercialName"
                        control={control}
                        rules={rules.commercialName}
                        render={({ field }) => (
                          <div>
                            <Input
                              {...field}
                              placeholder="Commercial Name"
                              label="Commercial Name"
                            />
                            {errors.commercialName && (
                              <p className="text-red-500 text-sm mt-2 ml-1">
                                {errors.commercialName.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="incorporationDate"
                        control={control}
                        rules={rules.incorporationDate}
                        render={({ field }) => (
                          <div>
                            <Input
                              {...field}
                              placeholder="Incorporation Date"
                              label="Incorporation Date"
                            />
                            {errors.incorporationDate && (
                              <p className="text-red-500 text-sm mt-2 ml-1">
                                {errors.incorporationDate.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name="businessType"
                        control={control}
                        rules={rules.businessType}
                        render={({ field }) => (
                          <div>
                            <Input
                              {...field}
                              placeholder="Business Type"
                              label="Business Type"
                            />
                            {errors.businessType && (
                              <p className="text-red-500 text-sm mt-2 ml-1">
                                {errors.businessType.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                    </>
                  )}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" type="submit" isDisabled={hasErrors()}>
                Submit
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Form;
