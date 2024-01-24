import { pageTitle, identity, skills, happy, goal } from "./about.astro";

<Fragment>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{pageTitle}</title>
    </head>
    <body>
      <style define:vars={{ skillColor }}>{`
      h1 {
        color: var(--skillColor);
        font-size: 4rem;
      }
      .skill {
        color: var(--skillColor);
        fontWeight : var(--skillWeight)
        font-weight: bold;
      }
    `}</style>

      <a href="/">Inicio</a>
      <a href="/about/">Sobre mi</a>
      <a href="/blog/">Blog</a>
      <h1>{pageTitle}</h1>
      <h2>... ¡y mi nuevo sitio Astro!</h2>

      <p>
        Estoy trabajando en el tutorial introductorio de Astro. Esta es la
        segunda página de mi sitio web, ¡y es la primera que he construido yo
        mismo!
      </p>

      <p>
        Este sitio se irá actualizando a medida que vaya completando más partes
        del tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!
      </p>
      <ul>
        <li>me llamo {identity.firstName}.</li>
        <li>
          Vivo en {identity.country} y trabajo como {identity.occupation}
        </li>
        {identity.hobbies.length >= 1 && (
          <Fragment>
            <li>
              Dos de mis aficiones son: {identity.hobbies[0]} y{" "}
              {identity.hobbies[1]}
            </li>
          </Fragment>
        )}
        <p>Mis habilidades son:</p>
        <ul>
          {skills.map((skill) => (
            <Fragment>
              <li class="skill">{skill}</li>
            </Fragment>
          ))}
        </ul>
      </ul>
      {happy && (
        <Fragment>
          <p>Estoy feliz</p>
        </Fragment>
      )}
      {goal === 3 ? (
        <Fragment>
          <p>Mi objetivo es terminar en 3 días.</p>
        </Fragment>
      ) : (
        <Fragment>
          <p>Mi objetivo no son 3 días.</p>
        </Fragment>
      )}
    </body>
  </html>
</Fragment>;
