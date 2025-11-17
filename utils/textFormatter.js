import React from 'react';

export const formatTextWithBold = (text) => {
  if (!text) return null;
  
  // Split text by ** patterns and create React elements
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // This is bold text - remove the ** and wrap in strong tag
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-semibold">
          {boldText}
        </strong>
      );
    }
    // Regular text
    return part;
  });
};

// Alternative: More advanced version that handles multiple formats
export const formatRichText = (text) => {
  if (!text) return null;
  
  // Handle bold **text**
  let elements = [];
  let currentIndex = 0;
  const boldRegex = /\*\*(.*?)\*\*/g;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold section
    if (match.index > currentIndex) {
      elements.push(text.slice(currentIndex, match.index));
    }
    
    // Add bold text
    elements.push(
      <strong key={match.index} className="text-Green font-semibold">
        {match[1]}
      </strong>
    );
    
    currentIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    elements.push(text.slice(currentIndex));
  }
  
  return elements.length > 0 ? elements : text;
};