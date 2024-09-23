import { UpdateInfoContext } from '@/App'
import { project } from '@/lib/types'
import { cn } from '@/lib/utils'
import React, { useContext } from 'react'
import ProjectEditOrAdd from './ProjectEditOrAdd'

interface ProjectExperienceProps {
  project: project
  showTopLine: boolean
}

const ProjectExperience: React.FC<ProjectExperienceProps> = (props) => {
  const { project, showTopLine } = props
  const updateInfo = useContext(UpdateInfoContext)

  return (
    <>
      <div
        className={cn(
          'box-between ',
          showTopLine &&
            'border-t-[1px] border-dashed pt-[10px] border-[#dddddd]'
        )}
      >
        <span className="bold-text">{project?.name}</span>
        <span className="inline-between">
          <ProjectEditOrAdd
            type="edit"
            defaultValues={project}
            trigger={
              <svg
                className="icon fill-[#999999] hover:fill-themeColor "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="22132"
                width="18"
                height="18"
              >
                <path
                  d="M862.709333 116.042667a32 32 0 1 1 45.248 45.248L455.445333 613.813333a32 32 0 1 1-45.258666-45.258666L862.709333 116.053333zM853.333333 448a32 32 0 0 1 64 0v352c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V224c0-64.8 52.533333-117.333333 117.333333-117.333333h341.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v576a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V448z"
                  p-id="22133"
                ></path>
              </svg>
            }
          />
          <span className="text-[#bdbcbc] text-[14px] mx-[5px] pb-[3px]">
            |
          </span>
          <svg
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              updateInfo && updateInfo(undefined, 'project-delete', project?.id)
            }}
            className="icon fill-[#999999] hover:fill-themeColor"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="23698"
            width="18"
            height="18"
          >
            <path
              d="M404.9 158.1c6.1-6.1 14.2-9.5 22.8-9.5h170.8c8.5 0 16.6 3.4 22.8 9.5 6.1 6.1 9.5 14.2 9.5 22.8v87.6H395.3v-87.6c0-8.5 3.4-16.6 9.6-22.8m-35.4-35.3c-14.9 14.9-24.2 35.5-24.2 58.1v137.6h335.4V180.9c0-45.3-37-82.3-82.3-82.3H427.6c-22.6 0-43.2 9.3-58.1 24.2z"
              p-id="23699"
            ></path>
            <path
              d="M64.2 260.3h895.1v58.3H64.2zM798.7 928.3h-574c-53.3 0-96.7-43.7-96.7-97.4V383.8h47v447.1c0 27.6 22.3 50.1 49.8 50.1h573.9c27.5 0 49.8-22.5 49.8-50.1V383.8h46.9v447.1c0 53.7-43.4 97.4-96.7 97.4z"
              p-id="23700"
            ></path>
            <path
              d="M384.1 383.8h50v431.5h-50zM589.4 383.8h50v431.5h-50z"
              p-id="23701"
            ></path>
          </svg>
        </span>
      </div>
      <div className="detail-item my-[10px] ">
        项目职责：
        <div className="text-[black] whitespace-pre-wrap">
          {project?.responsibility}
        </div>
      </div>
      <div className="detail-item my-[10px] ">
        项目描述：
        <div className="text-[black] whitespace-pre-wrap">
          {project?.description}
        </div>
      </div>
    </>
  )
}
export default ProjectExperience
