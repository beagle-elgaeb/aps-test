import styled from "styled-components/macro";
import photoAboutMe from "../image/about-me.jpg"

function AboutMe() {
  return (
    <AboutMeContainer>
      <MyPhoto src={photoAboutMe} alt="Евгения Никонова" />
      <MyName>Евгения Валерьевна Никонова</MyName>
      <Description>Я сейчас заканчиваю обучение на курсе web-разработки в Яндекс.Практикум.</Description>
      <Description>Работаю инженером-конструктором на опытном производстве.</Description>
      <Description>Люблю тестовые задания.</Description>
      <Description>Не люблю длинные собеседования.</Description>
      <Link href="https://github.com/beagle-elgaeb" aria-label="GitHub">&gt; Мой GitHub</Link>
      <Link href="https://hh.ru/resume/4afe5798ff093bebf90039ed1f667632626873" aria-label="резюме">&gt; Моё резюме</Link>
    </AboutMeContainer>
  )
}

export default AboutMe;

const AboutMeContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 0, 0.15);
  border-radius: 20px;
  box-shadow: 0 0 5px 2px yellowgreen;
  margin: 0 auto 0 auto;
  padding: 0 0 10px 0;
`;

const MyPhoto = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin: 0 0 10px 0;
`;

const MyName = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: yellowgreen;
  margin: 20px 10px 20px 10px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: yellowgreen;
  margin: 0 10px 10px 10px;
  
  :last-child {
      margin: 0 10px 20px 10px;
  }
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 16px;
  color: yellow;
  text-decoration: none;
  margin: 0 10px 10px 10px;
  
  :last-child {
      margin: 0 10px 20px 10px;
  }

  :hover {
    text-shadow: 0 0 8px, 0 0 8px, 0 0 8px;
  }
`;
