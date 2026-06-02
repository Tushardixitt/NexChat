import { LoaderIcon } from 'lucide-react'
import { useThemeStore } from "../store/useThemeStore.js";
function PageLoader() {
  const { theme } = useThemeStore();
  return (
    <div className="flex items-center justify-center min-h-screen" data-theme={theme}>
      <LoaderIcon className='animate-spin text-primary h-10 w-10' />
    </div>
  )
}

export default PageLoader
