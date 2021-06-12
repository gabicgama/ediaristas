import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça nossos profissionais"}
        subTitle={
          "Preencha seu endereço e veja todos os profissionais da sua região"
        }
      />
      <UserInformation
        name={"Gabriela"}
        picture={"https://github.com/gabicgama.png"}
        rating={5}
        description={"Minas Gerais"}
      />
    </div>
  );
}
