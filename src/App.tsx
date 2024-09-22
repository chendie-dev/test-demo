import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent } from '@/components/ui/card'
import { DialogForm } from '@/components/ui/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './App.css'
import avatar from './assets/images/avatar.jpeg'
import WorkExperience from './components/app/WorkExperience'
import { Button } from './components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './components/ui/form'
import { Input } from './components/ui/input'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select'
import data from './lib/data.json'
import { cn } from './lib/utils'
interface menberInfoType {
  basicInfo: Record<string, any>
}

function App() {
  const [menberInfo, setMerberInfo] = useState<menberInfoType>(
    JSON.parse(localStorage.getItem('menberInfo') ?? '{}')
  )
  useEffect(() => {
    let menberInfo = JSON.parse(localStorage.getItem('menberInfo') ?? '{}')
    if (Object.keys(menberInfo).length == 0) {
      localStorage.setItem('menberInfo', JSON.stringify(data))
      menberInfo = data
    }
    setMerberInfo(menberInfo)
  }, [])
  const scrollDown = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.documentElement.clientHeight,
    })
  }

  const formSchema = z.object({
    name: z.string().min(2).max(50),
    telNumber: z.string().min(11).max(11),
    email: z.string(),
    sex: z.string(),
    birthday: z.string(),
    workTime: z.string(),
    edcationBack: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: menberInfo?.basicInfo,
  })

  const updateInfo = (value: Record<string, any>, section: string) => {
    const newMenberInfo = { ...menberInfo }
    newMenberInfo[section] = value
    console.log(newMenberInfo, 'newMenberInfo')
    setMerberInfo(newMenberInfo)
    localStorage.setItem('menberInfo', JSON.stringify(newMenberInfo))
    return true
  }
  return (
    <>
      <div className="h-screen w-screen grid items-center justify-items-center overflow-hidden animate-fadeOutDown bg-[url('./assets/images/back1.jpeg')] bg-no-repeat bg-center bg-cover text-center">
        <Avatar className="h-40 w-40 transform transition-transform duration-1000 hover:rotate-[720deg] ">
          <AvatarImage src={avatar} />
        </Avatar>
        <div
          className="animate-newbounce absolute bottom-1 "
          onClick={scrollDown}
        >
          <svg
            // t="1726805949501"
            className="icon"
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
      <div className="grid items-center justify-items-center mt-[40px] ">
        <Card className="w-[65vw]">
          <CardContent>
            {/* 基础信息 */}
            <div className="border-bottom-card">
              <h3 className="font-[800] box-between">
                <span>{menberInfo?.basicInfo?.name}</span>
                <DialogForm
                  title="基本信息"
                  form={form}
                  trigger={
                    <svg
                      className="icon "
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="22132"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z"
                        fill="#999999"
                        p-id="22133"
                      ></path>
                    </svg>
                  }
                  onFinish={(values) => {
                    console.log(values, 'cdndiwdhoe')
                    return updateInfo(values, 'basicInfo')
                  }}
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>姓名</FormLabel>
                        <FormControl defaultValue={menberInfo?.basicInfo.name}>
                          <Input placeholder="请输入姓名" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>手机</FormLabel>
                        <FormControl
                          defaultValue={menberInfo?.basicInfo.telNumber}
                        >
                          <Input
                            type="number"
                            placeholder="请输入手机号"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>邮箱</FormLabel>
                        <FormControl defaultValue={menberInfo?.basicInfo.email}>
                          <Input placeholder="请输入邮箱" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>性别</FormLabel>
                        <FormControl defaultValue={menberInfo?.basicInfo.sex}>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex  flex-nowrap space-x-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="男" />
                              </FormControl>
                              <FormLabel className="font-normal">男</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="女" />
                              </FormControl>
                              <FormLabel className="font-normal">女</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="birthday"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>出生日期</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl
                              defaultValue={menberInfo?.basicInfo.birthday}
                            >
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-[100%] pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'yyyy-MM-dd')
                                ) : (
                                  <span>请选择日期</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={(value) => {
                                field.onChange(format(value, 'yyyy-MM-dd'))
                              }}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="workTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>参加工作时间</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl
                              defaultValue={menberInfo?.basicInfo.workTime}
                            >
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-[100%] pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'yyyy-MM-dd')
                                ) : (
                                  <span>请选择日期</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={(value) => {
                                // console.log(
                                //   value,
                                //   format(value, 'yyyy-MM-dd'),
                                //   'time'
                                // )
                                field.onChange(format(value, 'yyyy-MM-dd'))
                              }}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="edcationBack"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>学历</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl
                            defaultValue={menberInfo?.basicInfo.edcationBack}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="请选择" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="大专">大专</SelectItem>
                            <SelectItem value="本科">本科</SelectItem>
                            <SelectItem value="硕士">硕士</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </DialogForm>
              </h3>
              <span className=" inline-between gray-smal-text border-r-[1px]  border-[#dddddd] pr-[20px] mr-[20px]">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="18281"
                  width="18"
                  height="18"
                >
                  <path
                    d="M736.653061 929.959184H287.346939c-45.97551 0-83.591837-37.616327-83.591837-83.591837V177.632653c0-45.97551 37.616327-83.591837 83.591837-83.591837h449.306122c45.97551 0 83.591837 37.616327 83.591837 83.591837v668.734694c0 45.97551-37.616327 83.591837-83.591837 83.591837zM287.346939 135.836735c-22.987755 0-41.795918 18.808163-41.795919 41.795918v668.734694c0 22.987755 18.808163 41.795918 41.795919 41.795918h449.306122c22.987755 0 41.795918-18.808163 41.795919-41.795918V177.632653c0-22.987755-18.808163-41.795918-41.795919-41.795918H287.346939z"
                    fill="#999999"
                    p-id="18282"
                  ></path>
                  <path
                    d="M616.489796 815.020408H407.510204c-11.493878 0-20.897959-9.404082-20.897959-20.897959s9.404082-20.897959 20.897959-20.897959h208.979592c11.493878 0 20.897959 9.404082 20.897959 20.897959s-9.404082 20.897959-20.897959 20.897959z"
                    fill="#999999"
                    p-id="18283"
                  ></path>
                </svg>
                {menberInfo?.basicInfo?.telNumber}
              </span>
              <span className="inline-between gray-smal-text">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="19811"
                  width="18"
                  height="18"
                >
                  <path
                    d="M893.842 217.557H130.159c-16.261 0-29.443 13.182-29.443 29.443v530c0 16.261 13.182 29.443 29.443 29.443h763.683c16.261 0 29.443-13.183 29.443-29.443V247c0-16.261-13.182-29.443-29.443-29.443z m-85.584 58.886L512 507.651 215.742 276.443h592.516zM159.602 747.557v-440.23l334.283 260.885A29.4 29.4 0 0 0 512 574.443a29.4 29.4 0 0 0 18.115-6.231l334.283-260.884v440.229H159.602z"
                    fill="#999999"
                    p-id="19812"
                  ></path>
                </svg>
                {menberInfo?.basicInfo?.email}
              </span>
            </div>
            <div className="border-bottom-card grid grid-cols-2">
              {/* 最后一排不加mb-[10px] */}
              <div className="detail-item mb-[10px] ">
                性别：
                <span className="text-[black]">
                  {menberInfo?.basicInfo?.sex}
                </span>
              </div>
              <div className="detail-item mb-[10px] ">
                出生日期：
                <span className="text-[black]">
                  {menberInfo?.basicInfo?.birthday}
                </span>
              </div>
              <div className="detail-item  ">
                参加工作时间：
                <span className="text-[black]">
                  {menberInfo?.basicInfo?.workTime}
                </span>
              </div>
              <div className="detail-item ">
                学历：
                <span className="text-[black]">
                  {menberInfo?.basicInfo?.edcationBack}
                </span>
              </div>
            </div>
            {/* 工作经历 */}
            <div className="box-between">
              <span className=" before:content-[''] bold-text  my-[15px]  before:inline-block before:bg-pink-400 before:w-[4px] before:mr-[10px] before:h-[15px]">
                工作经历
              </span>
              <span className="inline-flex items-center text-[14px] cursor-pointer text-pink-400">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20970"
                  width="18"
                  height="18"
                >
                  <path
                    d="M511.998976 1024C229.230134 1024 0.002048 794.767818 0.002048 511.998976 0.002048 229.230134 229.230134 0 511.998976 0c282.77089 0 511.998976 229.230134 511.998976 511.998976C1023.997952 794.767818 794.767818 1024 511.998976 1024zM511.998976 64.00192C264.576495 64.00192 64.00192 264.576495 64.00192 511.998976c0 247.422481 200.574575 447.999104 447.997056 447.999104 247.424529 0 447.999104-200.576623 447.999104-447.999104C959.99808 264.576495 759.423505 64.00192 511.998976 64.00192zM703.998592 543.998912l-160.001728 0 0 160.001728c0 17.670109-14.325731 31.99584-31.999936 31.99584-17.672157 0-31.999936-14.325731-31.999936-31.99584l0-160.001728-159.997632 0c-17.672157 0-32.001984-14.327779-32.001984-31.999936 0-17.670109 14.329827-31.997888 32.001984-31.997888l159.997632 0 0-160.003776c0-17.672157 14.329827-31.99584 31.999936-31.99584 17.672157 0 31.999936 14.321635 31.999936 31.99584l0 160.003776 160.001728 0c17.672157 0 31.999936 14.327779 31.999936 31.997888C735.998528 529.671133 721.672797 543.998912 703.998592 543.998912z"
                    p-id="20971"
                    fill="#F490B6"
                  ></path>
                </svg>
                添加
              </span>
            </div>
            <WorkExperience />
            {/* 项目经历 */}
            <div className="box-between">
              <span className=" before:content-[''] bold-text  my-[15px]  before:inline-block before:bg-pink-400 before:w-[4px] before:mr-[10px] before:h-[15px]">
                项目经历
              </span>
              <span className="inline-flex items-center text-[14px] cursor-pointer text-pink-400">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20970"
                  width="18"
                  height="18"
                >
                  <path
                    d="M511.998976 1024C229.230134 1024 0.002048 794.767818 0.002048 511.998976 0.002048 229.230134 229.230134 0 511.998976 0c282.77089 0 511.998976 229.230134 511.998976 511.998976C1023.997952 794.767818 794.767818 1024 511.998976 1024zM511.998976 64.00192C264.576495 64.00192 64.00192 264.576495 64.00192 511.998976c0 247.422481 200.574575 447.999104 447.997056 447.999104 247.424529 0 447.999104-200.576623 447.999104-447.999104C959.99808 264.576495 759.423505 64.00192 511.998976 64.00192zM703.998592 543.998912l-160.001728 0 0 160.001728c0 17.670109-14.325731 31.99584-31.999936 31.99584-17.672157 0-31.999936-14.325731-31.999936-31.99584l0-160.001728-159.997632 0c-17.672157 0-32.001984-14.327779-32.001984-31.999936 0-17.670109 14.329827-31.997888 32.001984-31.997888l159.997632 0 0-160.003776c0-17.672157 14.329827-31.99584 31.999936-31.99584 17.672157 0 31.999936 14.321635 31.999936 31.99584l0 160.003776 160.001728 0c17.672157 0 31.999936 14.327779 31.999936 31.997888C735.998528 529.671133 721.672797 543.998912 703.998592 543.998912z"
                    p-id="20971"
                    fill="#F490B6"
                  ></path>
                </svg>
                添加
              </span>
            </div>
            {/* 教育经历 */}
            <div className="box-between">
              <span className=" before:content-[''] bold-text  my-[15px]  before:inline-block before:bg-pink-400 before:w-[4px] before:mr-[10px] before:h-[15px]">
                教育经历
              </span>
              <span className="inline-flex items-center text-[14px] cursor-pointer text-pink-400">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20970"
                  width="18"
                  height="18"
                >
                  <path
                    d="M511.998976 1024C229.230134 1024 0.002048 794.767818 0.002048 511.998976 0.002048 229.230134 229.230134 0 511.998976 0c282.77089 0 511.998976 229.230134 511.998976 511.998976C1023.997952 794.767818 794.767818 1024 511.998976 1024zM511.998976 64.00192C264.576495 64.00192 64.00192 264.576495 64.00192 511.998976c0 247.422481 200.574575 447.999104 447.997056 447.999104 247.424529 0 447.999104-200.576623 447.999104-447.999104C959.99808 264.576495 759.423505 64.00192 511.998976 64.00192zM703.998592 543.998912l-160.001728 0 0 160.001728c0 17.670109-14.325731 31.99584-31.999936 31.99584-17.672157 0-31.999936-14.325731-31.999936-31.99584l0-160.001728-159.997632 0c-17.672157 0-32.001984-14.327779-32.001984-31.999936 0-17.670109 14.329827-31.997888 32.001984-31.997888l159.997632 0 0-160.003776c0-17.672157 14.329827-31.99584 31.999936-31.99584 17.672157 0 31.999936 14.321635 31.999936 31.99584l0 160.003776 160.001728 0c17.672157 0 31.999936 14.327779 31.999936 31.997888C735.998528 529.671133 721.672797 543.998912 703.998592 543.998912z"
                    p-id="20971"
                    fill="#F490B6"
                  ></path>
                </svg>
                添加
              </span>
            </div>
            {/* 获奖经历 */}
            <div className="box-between">
              <span className=" before:content-[''] bold-text  my-[15px]  before:inline-block before:bg-pink-400 before:w-[4px] before:mr-[10px] before:h-[15px]">
                获奖经历
              </span>
              <span className="inline-flex items-center text-[14px] cursor-pointer text-pink-400">
                <svg
                  className="icon mr-[5px]"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="20970"
                  width="18"
                  height="18"
                >
                  <path
                    d="M511.998976 1024C229.230134 1024 0.002048 794.767818 0.002048 511.998976 0.002048 229.230134 229.230134 0 511.998976 0c282.77089 0 511.998976 229.230134 511.998976 511.998976C1023.997952 794.767818 794.767818 1024 511.998976 1024zM511.998976 64.00192C264.576495 64.00192 64.00192 264.576495 64.00192 511.998976c0 247.422481 200.574575 447.999104 447.997056 447.999104 247.424529 0 447.999104-200.576623 447.999104-447.999104C959.99808 264.576495 759.423505 64.00192 511.998976 64.00192zM703.998592 543.998912l-160.001728 0 0 160.001728c0 17.670109-14.325731 31.99584-31.999936 31.99584-17.672157 0-31.999936-14.325731-31.999936-31.99584l0-160.001728-159.997632 0c-17.672157 0-32.001984-14.327779-32.001984-31.999936 0-17.670109 14.329827-31.997888 32.001984-31.997888l159.997632 0 0-160.003776c0-17.672157 14.329827-31.99584 31.999936-31.99584 17.672157 0 31.999936 14.321635 31.999936 31.99584l0 160.003776 160.001728 0c17.672157 0 31.999936 14.327779 31.999936 31.997888C735.998528 529.671133 721.672797 543.998912 703.998592 543.998912z"
                    p-id="20971"
                    fill="#F490B6"
                  ></path>
                </svg>
                添加
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default App
