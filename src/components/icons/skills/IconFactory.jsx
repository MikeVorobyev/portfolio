import {useMemo, memo} from 'react';
import iconLibrary from './iconLibrary';

const IconFactory = memo(({ 
  name_ID,
  name_titlePopup,           
  size = 32,
  color,
  customClass = '',
  style = {}
}) => {

  // Кэшируем иконку
  const iconElement = useMemo(() => {
    const IconComponent = iconLibrary[name_ID.toLowerCase()]
    
    return (
    <IconComponent
      width={size}
      height={size}
      color={color}
      style={{ 
        cursor: 'pointer', 
        ...style,
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        userSelect: 'none'
      }}
    />
    )
  }, [name_ID, size, color, style])

  return <div title={name_titlePopup}>{iconElement}</div>
});

export default IconFactory