import {
  ContainerRoot,
  Content,
  HeaderContainer,
} from "@/components/container-content";
import { Tecnology } from "@/components/tecnology";
import { Code } from "lucide-react";

export function Experiences() {
  return (
    <ContainerRoot>
      <HeaderContainer>
        <Code className="size-5 text-gray-400" />
        <span>Experiences</span>
      </HeaderContainer>
      <Content>
        <Tecnology />
      </Content>
    </ContainerRoot>
  );
}
