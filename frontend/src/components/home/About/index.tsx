import { ChartLineUp, Smiley } from "phosphor-react";
import {
  AboutContainer,
  LeftCard,
  LeftContent,
  RightCard,
  RightContent,
  TextField,
} from "./styles";

export function About() {
  return (
    <AboutContainer>
      <LeftContent>
        <TextField>
          <ChartLineUp size={42} color="#F75A68" />
          <h2>Use as nossas ferramentas avançadas de pesquisa.</h2>
          <p>
            Um StrawPoll é um voto que é usado para determinar facilmente a
            opinião de um grupo ou do público sobre um determinado tópico. Os
            Strawpolls são muito úteis quando apenas a opinião da maioria é
            importante e não a opinião de cada participante individual.
          </p>
        </TextField>
        <RightCard></RightCard>
      </LeftContent>

      <RightContent>
        <LeftCard></LeftCard>
        <TextField>
          <Smiley size={42} color="#F75A68" />
          <h2>Feedback instantâneo e dinâmico.</h2>
          <p>
            As respostas do seu público aparecerão em tempo real com os nossos
            visuais dinâmicos e vibrantes. Os nossos diapositivos interactivos
            crescerão e mudarão à medida que as respostas do seu público forem
            surgindo.
          </p>
        </TextField>
      </RightContent>
    </AboutContainer>
  );
}
