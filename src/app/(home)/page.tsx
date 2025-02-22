import {
  GithubIcon,
  LinkedinIcon,
  MapPin,
  Paperclip,
  Phone,
} from "lucide-react";
import me from "../../assets/me.jpg";
import Image from "next/image";
import {
  ContainerRoot,
  Content,
  HeaderContainer,
} from "@/components/container-content";
import { Experiences } from "./experiences";
import { Projects } from "./projects";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center gap-12 px-4 xl:px-36 2xl:px-72">
      <div className="w-[290px] lg:min-h-dvh px-3 flex flex-col gap-7">
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <Image
            className="size-44 rounded-full object-cover "
            src={me}
            alt=""
          />
        </div>
        <div>
          <span className="font-semibold text-xl">Guilherme Lima</span>
          <br />
          <span className="text-gray-300 text-lg">Front-end Enginner</span>
        </div>
        <div className="w-full py-2 flex items-center justify-center bg-gray-600 rounded-md border border-gray-500">
          My Profile
        </div>

        <div className="space-y-3">
          <span className="flex items-center gap-2">
            <MapPin className="size-5 text-gray-300" />
            Guarulhos, SP
          </span>
          <a
            href="https://www.linkedin.com/in/guilhermelimadev/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 hover:underline"
          >
            <LinkedinIcon className="size-5 text-gray-300" />
            linkedin.com/guilhermelimadev/
          </a>
          <a
            href="https://wa.me/5511966144965"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 hover:underline"
          >
            <Phone className="size-5 text-gray-300" />
            55 11 966144965
          </a>
          <a
            href="https://github.com/guilhermeslimadev"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 hover:underline"
          >
            <GithubIcon className="size-5 text-gray-300" />
            github.com/guilhermeslimadev
          </a>
        </div>
      </div>
      <article className="flex flex-col gap-7 min-h-dvh">
        <ContainerRoot>
          <HeaderContainer>
            <Paperclip className="size-5 text-gray-300" />
            <span>About</span>
            <span className="text-gray-300">/</span>
            <span>
              README<span className="text-gray-300">.md</span>{" "}
            </span>
          </HeaderContainer>
          <Content>
            🙋 Hello! My name is Guilherme Lima, I'm a Front-End Enginner
            passionate about creating incredible and interactive digital
            experiences. my focus is always to deliver responsive, intuitive and
            user-friendly interfaces. great performance.
          </Content>
        </ContainerRoot>

        <Experiences />

        <Projects />
      </article>
    </main>
  );
}
