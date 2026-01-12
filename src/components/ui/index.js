/**
 * [INPUT]: 依赖 components/ui/ 下的所有 shadcn/ui 组件
 * [OUTPUT]: 对外统一导出所有 UI 组件
 * [POS]: components/ui/ 的导出入口，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

// Button
export { Button, buttonVariants } from './button.jsx'

// Card
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card.jsx'

// Input
export { Input } from './input.jsx'

// Label
export { Label } from './label.jsx'

// Badge
export { Badge, badgeVariants } from './badge.jsx'

// Alert
export { Alert, AlertTitle, AlertDescription } from './alert.jsx'

// Skeleton
export { Skeleton } from './skeleton.jsx'

// Progress
export { Progress } from './progress.jsx'

// Tabs
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './tabs.jsx'

// Accordion
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion.jsx'

// Avatar
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from './avatar.jsx'

// Tooltip
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip.jsx'

// Switch
export { Switch } from './switch.jsx'

// Select
export {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from './select.jsx'

// Checkbox
export { Checkbox } from './checkbox.jsx'

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog.jsx'

// Sheet
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './sheet.jsx'

// Form
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from './form.jsx'

// Radio Group
export {
  RadioGroup,
  RadioGroupItem,
} from './radio-group.jsx'

// Textarea
export { Textarea } from './textarea.jsx'

// Sonner (Toast)
export { Toaster as Sonner } from './sonner.jsx'

// Navigation Menu
export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './navigation-menu.jsx'

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './dropdown-menu.jsx'

// Popover
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from './popover.jsx'

// Hover Card
export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from './hover-card.jsx'

// Scroll Area
export { ScrollArea } from './scroll-area.jsx'

// Separator
export {
  Separator,
} from './separator.jsx'

// Command
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command.jsx'

// Collapsible
export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './collapsible.jsx'

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table.jsx'
