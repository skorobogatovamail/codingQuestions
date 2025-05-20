
import { Ref, useRef, useState, useEffect} from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
    const ref = useRef<T>(null)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const node = ref.current;
      if (!node) return;

      node.addEventListener('mouseenter', () => setIsHovered(true))
      node.addEventListener('mouseleave', () =>  setIsHovered(false))

      return () => {
         node.removeEventListener('mouseenter', () => setIsHovered(true))
         node.removeEventListener('mouseleave', () =>  setIsHovered(false))
      }
       
    }, [ref.current]) 

    return [ref, isHovered]
}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {

  const [ref, isHovered] = useHover()
  return <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
}





