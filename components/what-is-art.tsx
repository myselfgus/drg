export function WhatIsMentalHealth() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/peaceful-therapy-office-with-natural-light.jpg"
                alt="Ambiente terapêutico tranquilo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium text-balance">
                Compreendendo a Saúde Mental
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  A saúde mental é um componente essencial do bem-estar geral, abrangendo nosso bem-estar emocional,
                  psicológico e social. Ela afeta como pensamos, sentimos e agimos em nossas vidas diárias.
                </p>

                <p className="text-base">
                  Ao longo da vida, desafios de saúde mental podem surgir de várias fontes—fatores biológicos,
                  experiências de vida, trauma ou histórico familiar. Reconhecer esses desafios e buscar apoio
                  profissional é um sinal de força, não de fraqueza.
                </p>

                <p className="text-base">
                  O cuidado psiquiátrico de qualidade oferece um espaço seguro para explorar seus pensamentos e
                  sentimentos, desenvolver estratégias de enfrentamento e trabalhar em direção a mudanças
                  significativas. Através de tratamentos baseados em evidências e apoio compassivo, a cura e o
                  crescimento são possíveis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-base">
              Em sua essência, o tratamento psiquiátrico é sobre conexão: entre mente e corpo, entre experiências
              passadas e desafios presentes, e entre paciente e médico. Ele honra sua história única enquanto fornece a
              expertise clínica necessária para um tratamento eficaz.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">Sobre Dr. Gustavo Mendes e Silva</h3>
              <p className="text-base">
                Dr. Gustavo Mendes e Silva é dedicado a fornecer cuidado psiquiátrico abrangente que aborda a pessoa
                como um todo. Com anos de experiência e compromisso contínuo com os últimos desenvolvimentos em medicina
                psiquiátrica, Dr. Silva cria planos de tratamento individualizados que respeitam os valores, objetivos e
                circunstâncias de cada paciente. Através de avaliação cuidadosa, intervenções baseadas em evidências e
                apoio compassivo, ele ajuda os pacientes a navegar sua jornada de saúde mental em direção a maior
                bem-estar e realização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
