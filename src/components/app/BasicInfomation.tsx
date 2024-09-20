import React from 'react'
interface BasicInfomationProps {
  basicInfomation: Record<string, any>
}
const BasicInfomation: React.FC<BasicInfomationProps> = ({
  basicInfomation,
}) => {
  return (
    <>
      <div className="border-bottom-card">
        <h3 className="font-[800]">陈蝶</h3>
        <span className="gray-smal-text border-r-[1px]  border-[#dddddd] pr-[20px] mr-[20px]">
          185165054401
        </span>
        <span className="gray-smal-text">cd060300@outlook.com</span>
      </div>
      <div className="border-bottom-card grid grid-cols-2">
        {/* 最后一排不加mb-[10px] */}
        <div className="detail-item mb-[10px] ">
          性别：<span className="text-[black]">女</span>
        </div>
        <div className="detail-item ">
          性别：<span className="text-[black]">女</span>
        </div>
        <div className="detail-item">
          性别：<span className="text-[black]">女</span>
        </div>
      </div>
      <div className="py-[15px] grid grid-cols-2">
        {/* 最后一排不加mb-[10px] */}
        <div className="detail-item mb-[10px] ">
          性别：<span className="text-[black]">女</span>
        </div>
        <div className="detail-item ">
          性别：<span className="text-[black]">女</span>
        </div>
        <div className="detail-item">
          性别：<span className="text-[black]">女</span>
        </div>
      </div>
    </>
  )
}

export default BasicInfomation
