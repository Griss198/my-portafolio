import { Container } from "react-bootstrap";

// Usamos íconos desde Devicons (modo "plain" para que se vean tipo monochrome).
// Si prefieres, luego los podemos descargar a `src/assets/img` para que sean 100% offline.
const languages = [
  {
    name: "C++",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/cplusplus/cplusplus-plain.svg",
  },
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Vue",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "PHP",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/php/php-original.svg",
  },
  {
    name: "Python",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/python/python-plain.svg",
  },
  {
    name: "Bootstrap",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Firebase",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/firebase/firebase-original-wordmark.svg",
  },
  {
    name: "Tailwind",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "SQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    name: "MySQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "PostgresSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Docker",
    iconUrl:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "Git",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
  },
  {
    name: "SQLServer",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
  },
  {
    name: "MongoDB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
  },
  {
    name: "Quasar",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-plain-wordmark.svg",
  },
  {
    name:"Nest",
    iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons//nestjs/nestjs-original-wordmark.svg",
  } 
];

const tools =
[
    {
        name: "vscode",
        iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
    },
    {
        name: "Postman",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg"
    },
    {
        name: "FileZilla",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-original.svg"
    },
    {
        name: "Jira",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg"
    },
    {
        name: "Notion",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
    },
    {
        name: "Dbeaver",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" 
    }
]

export const Languages = () => {
  return (
    <section className="languages" id="languages">
      <Container>
        <h2 className="aboutme-title">Lenguajes</h2>
        <div className="languages-grid" role="list" aria-label="Lenguajes y frameworks">
          {languages.map((lang) => (
            <div key={lang.name} className="language-card" role="listitem">
              <img src={lang.iconUrl} alt={lang.name} loading="lazy" />
            </div>
          ))}
        </div>
          <br></br>
        <h2 className="aboutme-title">Herramientas</h2>
        <div className="tool-grid" role="list" aria-label="Herramientas que utilizo">
            {tools.map((tool)=> (
                <div key={tool.name} className="tool-card" role="listitem">
                    <img src={tool.iconUrl} alt={tool.name} loading="lazy" />
                </div>
            ))}
        </div>
      </Container>
    </section>
  );
};
