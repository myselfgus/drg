export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
              Conectando pacientes com cuidado compassivo
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                A prática do Dr. Gustavo Mendes e Silva foi fundada na crença de que todo indivíduo merece acesso a
                cuidado psiquiátrico de alta qualidade e personalizado. Trabalhamos colaborativamente com os pacientes
                para entender seus desafios únicos e desenvolver planos de tratamento que promovam bem-estar duradouro.
              </p>
              <p>
                Nossa abordagem combina os mais recentes tratamentos baseados em evidências com um profundo respeito
                pela jornada individual de cada paciente. Fornecemos o apoio, expertise e cuidado compassivo necessários
                para navegar desafios de saúde mental e alcançar progresso significativo.
              </p>
              <p className="text-muted-foreground">
                Cada paciente é tratado com dignidade, respeito e confidencialidade. Estamos comprometidos em criar um
                espaço seguro e sem julgamentos onde a cura pode começar.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/modern-medical-office-consultation-room.jpg"
              alt="Espaço de consulta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
