import React, { useState, useEffect } from 'react'

export const DocsDetail = ({
  match
}) => {
  const [docItem, setDocItem] = useState(null)
  
  useEffect(() => {
    let faqId = match.params.faqId
    console.log('faqId:', faqId)
  }, [match])
  
  return (
    <div>
      DocsDetail w id: {match.params.faqId}
    </div>
  )
}
