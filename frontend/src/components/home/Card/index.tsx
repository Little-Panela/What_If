import Image from "next/image";
import {
  ButtonNewSearch,
  CardContainer,
  LeftContent,
  RightContent,
  TextField,
} from "./styles";
import { PencilLine } from "phosphor-react";

import illustration from "../../../assets/friendsTaksIllustration.svg";

export function Card() {
  return (
    <CardContainer>
      <LeftContent>
        <TextField>
          <h1>
            Crie a sua pesquisa, <br /> <span>em segundos.</span>
          </h1>
          <p>
            Quer perguntar aos seus amigos aonde ir na sexta-feira à noite ou
            marcar uma reunião com os colegas?
          </p>
          <p>
            <span>Crie uma pesquisa</span> e obtenha respostas em{" "}
            <span>tempo real.</span>
          </p>
        </TextField>
        <ButtonNewSearch>
          <PencilLine size={24} />
          <span>CRIAR PESQUISA</span>
        </ButtonNewSearch>
      </LeftContent>
      <RightContent>
        <Image className="image" src={illustration} alt="" loading="lazy" />
      </RightContent>
    </CardContainer>
  );
}
