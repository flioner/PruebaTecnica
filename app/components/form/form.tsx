import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@heroui/react";
import { rules } from "./rules";
import api from "@/app/api/api";

interface FormProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  setRefetch: React.Dispatch<
    React.SetStateAction<{ modifiedTable: string; shouldRefresh: boolean }>
  >;
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

const Form: React.FC<FormProps> = ({ isOpen, onOpenChange, setRefetch }) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const rfcValue = watch("rfc");
  const isFisica = /^[A-Z]{4}/i.test(rfcValue);
  const isRfcComplete = rfcValue?.length >= 10;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (isFisica) {
      const fisicaData = {
        name: data.name ?? "",
        surname: data.surname ?? "",
        birthdate: data.birthdate ?? "",
        rfc: data.rfc ?? "",
      };

      api.addFisicaData(fisicaData);
      setRefetch({ modifiedTable: "fisica", shouldRefresh: true });
    } else {
      const moralData = {
        commercialName: data.commercialName ?? "",
        incorporationDate: data.incorporationDate ?? "",
        businessType: data.businessType ?? "",
        rfc: data.rfc ?? "",
      };
      api.addMoralData(moralData);
      setRefetch({ modifiedTable: "moral", shouldRefresh: true });
    }
    reset();
    onOpenChange(false);
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
                            <Input
                              {...field}
                              placeholder="Nombre"
                              label="Nombre"
                            />
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
                              placeholder="Apellido"
                              label="Apellido"
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
                              placeholder="Cumpleaños"
                              label="Cumpleaños"
                              type="date"
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
                              placeholder="Nombre Comercial"
                              label="Nombre Comercial"
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
                              placeholder="Fecha de constitución"
                              label="Fecha de constitución"
                              type="date"
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
                            <Input {...field} placeholder="Giro" label="Giro" />
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
