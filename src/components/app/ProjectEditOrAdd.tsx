import { UpdateInfoContext } from '@/App'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'
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
interface ProjectEditOrAddProps {
  trigger: React.ReactNode
  defaultValues?: Record<string, any>
  type: 'add' | 'edit'
}
const ProjectEditOrAdd: React.FC<ProjectEditOrAddProps> = (props) => {
  const { trigger, defaultValues, type } = props
  const updateInfo = useContext(UpdateInfoContext)
  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string(),
        position: z.string(),
        description: z.string(),
        responsibility: z.string(),
      })
    ),
    defaultValues: defaultValues,
  })
  return (
    <>
      <DialogForm
        title="项目经历"
        form={form}
        trigger={trigger}
        onFinish={(values) => {
          if (type === 'add') {
            return (
              updateInfo && updateInfo({ id: uuidv4(), ...values }, 'project')
            )
          } else {
            return (
              updateInfo &&
              updateInfo(
                { id: defaultValues?.id, ...values },
                `project`,
                defaultValues?.id
              )
            )
          }
          // return updateInfo(values, 'basicInfo')
        }}
      >
        <div className="flex w-full justify-between">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>项目名称</FormLabel>
                <FormControl>
                  <Input placeholder="请输入项目名称" {...field} />
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
                <FormLabel>职务名称</FormLabel>
                <FormControl>
                  <Input placeholder="请输入职务名称" {...field} />
                </FormControl>
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
              <FormLabel>项目职责</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>项目描述</FormLabel>
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

export default ProjectEditOrAdd
