import Header from '@/components/layout/headers'
import Container from '@/components/ui/container'
import CardLink from '@/components/ui/card-link'
import ButtonScrollTop from '@/components/ui/button-scroll-top'

export default function PageDzikir() {
  const menu = [{
    name: 'Dzikir Pagi',
    url: '/dzikir/dzikir-pagi',
  }, {
    name: 'Dzikir Petang',
    url: '/dzikir/dzikir-petang',
  }]
  return (
    <>
      <Header isFixed={true} isBack={true} title="Dzikir" />
      <Container>
        <div className="flex flex-col items-center justify-center px-[20px]">
          <div className="flex flex-col gap-3 w-full mb-6">
            {menu.map((item, i) => (
              <CardLink key={i} name={item.name} url={item.url} />
            ))}
          </div>
        </div>
      </Container>
      <ButtonScrollTop />
    </>
  )
}
