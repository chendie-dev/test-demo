import { UpdateInfoContext } from '@/App'
import { work } from '@/lib/types'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { DialogForm } from '../ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
interface WorkEditOrAddProps {
  trigger: React.ReactNode
  defaultValues?: work
  type: 'add' | 'edit'
}
const WorkEditOrAdd: React.FC<WorkEditOrAddProps> = (props) => {
  const { trigger, defaultValues, type } = props
  const updateInfo = useContext(UpdateInfoContext)
  const form = useForm({
    resolver: zodResolver(
      z.object({
        company: z.string(),
        position: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        responsibility: z.string(),
      })
    ),
    defaultValues: defaultValues,
  })
  return (
    <>
      <DialogForm
        title="工作经历"
        form={form}
        trigger={trigger}
        onFinish={(values) => {
          if (type === 'add') {
            return updateInfo && updateInfo({ id: uuidv4(), ...values }, 'work')
          } else {
            return (
              updateInfo &&
              updateInfo(
                { id: defaultValues?.id, ...values },
                `work`,
                defaultValues?.id
              )
            )
          }
          // return updateInfo(values, 'basicInfo')
        }}
      >
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>公司名称</FormLabel>
              <FormControl>
                <Input placeholder="请输入公司名称" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>职位名称</FormLabel>
              <FormControl>
                <Input placeholder="请输入职位名称" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>开始时间</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
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
                          <span className="text-[#d9d9d9]">请选择日期</span>
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
                        field.onChange(format(value!, 'yyyy-MM-dd'))
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
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
            name="endTime"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>结束时间</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
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
                          <span className="text-[#d9d9d9]">请选择日期</span>
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
                        field.onChange(format(value!, 'yyyy-MM-dd'))
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="responsibility"
          render={({ field }) => (
            <FormItem>
              <FormLabel>职责描述</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </DialogForm>
    </>
  )
}

export default WorkEditOrAdd
