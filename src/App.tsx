import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import './App.css'
import avatar from './assets/images/avatar.jpeg'

function App() {
  const scrollDown = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.documentElement.clientHeight,
    })
  }
  return (
    <>
      <div className="h-screen w-screen overflow-hidden animate-fadeOutDown bg-[url('./assets/images/back1.jpeg')] bg-no-repeat bg-center bg-cover text-center">
        <Avatar className="h-40 w-40 mt-[40vh] ml-[46%] transform transition-transform duration-1000 hover:rotate-[720deg] ">
          <AvatarImage src={avatar} />
        </Avatar>
        <div
          className="animate-newbounce absolute bottom-1 left-[49%]"
          onClick={scrollDown}
        >
          <svg
            t="1726805949501"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15118"
            width="24"
            height="24"
          >
            <path
              d="M83.171556 0L512 409.941333 940.828444 0 1024 79.530667 512 568.888889 0 79.530667 83.171556 0z m0 455.111111L512 865.052444 940.828444 455.111111 1024 534.528 512 1024 0 534.528 83.171556 455.111111z"
              fill="#eee"
              p-id="15119"
            ></path>
          </svg>
        </div>
      </div>
      <div className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default App
