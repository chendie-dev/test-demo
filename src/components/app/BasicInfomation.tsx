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
        <h3 className="font-[800] box-between">
          <span>陈蝶</span>
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
          185165054401
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
          cd060300@outlook.com
        </span>
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
