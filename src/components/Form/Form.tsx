import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Title } from "../ui/title";

export const Form = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-x-axis-layout py-8 md:py-y-axis-layout">
      <div className="bg-primary-light p-8 md:p-12 rounded-md">
        <Title size={'md'} className="pb-8">
          Napisz do nas
        </Title>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Input placeholder="Imię" />
          <Input placeholder="Nazwisko" />
          <Input placeholder="Adres e-mail" />
          <Input placeholder="Numer telefonu" />
          <Textarea
            className="md:col-span-2 h-[200px]"
            placeholder="Twoja wiadomość"
          />
          <div className="flex items-start md:col-span-2">
            <Checkbox />
            <label className="pl-2 text-sm text-gray-dark font-inter">
              Zapoznałem się z regulaminem i wyrażam zgodę na przetwarzanie
              moich danych osobowych przez Sungroup.pl
            </label>
          </div>
          <Button
            size={"sm"}
            type="submit"
            className="md:col-start-2 md:col-end-3 w-full"
          >
            Wyślij wiadomość
          </Button>
        </form>
      </div>
      <div className="hidden md:flex h-[300px] md:h-auto bg-[url('/FormImage.png')] bg-center bg-cover rounded-md" />
    </section>
  );
};
