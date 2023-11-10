import { Button } from 'antd'
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <div className="flex gap-4">
        <Button type='primary'>Primary Button</Button>
        <Button type='default'>Default Button</Button>
      </div>
    </div>
  )
}
