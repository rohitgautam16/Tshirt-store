import React from 'react'
import CustomButton from './CustomButton' 


const AIpicker = ({prompt, setprompt, generatingImg,handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Enter a prompt'
        rows={5}
        value={prompt}
        onChange={(e) => setprompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type= 'outline'
            title= 'Generating Image...'
            customStyles= 'text-xs'
          />
        ) : (
          <>
          <CustomButton
            type= 'outline'
            title= 'Image Logo'
            handleClick={() => handleSubmit('logo')}
            customStyles= 'text-xs'
          />

          <CustomButton
            type= 'filled'
            title= 'Image Full'
            handleClick={() => handleSubmit('full')}
            customStyles= 'text-xs'
          />
          </>
        )
      }
      </div>
    </div>
  )
}

export default AIpicker
