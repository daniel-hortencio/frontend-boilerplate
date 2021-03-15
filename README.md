## Frontend Boilerplate

- Componentes

  - Átomo: O átomo é o componente mais simples que você terá no seu sistema, podem ser o button, o input, slider e assim por diante. E cada um terá seu comportamento bem definido e estilizações próprias. Será um componente sem estado, com a única responsabilidade de receber props e renderizar (Exemplos: Inputs, Cards, Buttons, Toggle, etc...)

  - Molécula: Componente que une 2 ou mais átomos, podendo ter estados(Exemplo: Forms, InputGroups, Sections, etc...)

  - Organismos: Um conjunto de moléculas(Exemplo: página completa)

- Styles:

  - Priorizar estilizar com classes do tailwind, usar Styled Components somente em uma situação específica em que o tailwind não dê suporte.
