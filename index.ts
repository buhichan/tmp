import Affix from "antd/lib/affix"
import Anchor from "antd/lib/anchor"
import Alert from "antd/lib/alert"
import Avatar from "antd/lib/avatar"
import BackTop from "antd/lib/back-top"
import Badge from "antd/lib/badge"
import Breadcrumb from "antd/lib/breadcrumb"
import Button from "antd/lib/button"
import Calendar from "antd/lib/calendar"
import Card from "antd/lib/card"
import Collapse from "antd/lib/collapse"
import Carousel from "antd/lib/carousel"
import Cascader from "antd/lib/cascader"
import Checkbox from "antd/lib/checkbox"
import Col from "antd/lib/col"
import DatePicker from "antd/lib/date-picker"
import Divider from "antd/lib/divider"
import Dropdown from "antd/lib/dropdown"
import Form from "antd/lib/form"
import Icon from "antd/lib/icon"
import Input from "antd/lib/input"
import InputNumber from "antd/lib/input-number"
import Layout from "antd/lib/layout"
import List from "antd/lib/list"
import LocaleProvider from "antd/lib/locale-provider"
import message from "antd/lib/message"
import Menu from "antd/lib/menu"
import Modal from "antd/lib/modal"
import notification from "antd/lib/notification"
import Pagination from "antd/lib/pagination"
import Popconfirm from "antd/lib/popconfirm"
import Popover from "antd/lib/popover"
import Progress from "antd/lib/progress"
import Radio from "antd/lib/radio"
import Rate from "antd/lib/rate"
import Row from "antd/lib/row"
import Select from "antd/lib/select"
import Slider from "antd/lib/slider"
import Spin from "antd/lib/spin"
import Steps from "antd/lib/steps"
import Switch from "antd/lib/switch"
import Table from "antd/lib/table"
import Transfer from "antd/lib/transfer"
import Tree from "antd/lib/tree"
import TreeSelect from "antd/lib/tree-select"
import Tabs from "antd/lib/tabs"
import Tag from "antd/lib/tag"
import TimePicker from "antd/lib/time-picker"
import Timeline from "antd/lib/timeline"
import Tooltip from "antd/lib/tooltip"
import Mention from "antd/lib/mention"
import Upload from "antd/lib/upload"
import version from "antd/lib/version"


function inspect(type,Component){
    console.log(type+" is",typeof Component)
    if(typeof Component === 'object' || typeof Component === 'function')
        console.log("\t"+type + ' has keys:',Object.keys(Component))
}

inspect("affix", Affix)
inspect("anchor", Anchor)
inspect("alert", Alert)
inspect("avatar", Avatar)
inspect("back-top", BackTop)
inspect("badge", Badge)
inspect("breadcrumb", Breadcrumb)
inspect("button", Button)
inspect("calendar", Calendar)
inspect("card", Card)
inspect("collapse", Collapse)
inspect("carousel", Carousel)
inspect("cascader", Cascader)
inspect("checkbox", Checkbox)
inspect("col", Col)
inspect("date-picker", DatePicker)
inspect("divider", Divider)
inspect("dropdown", Dropdown)
inspect("form", Form)
inspect("icon", Icon)
inspect("input", Input)
inspect("input-number", InputNumber)
inspect("layout", Layout)
inspect("list", List)
inspect("locale-provider", LocaleProvider)
inspect("message", message)
inspect("menu", Menu)
inspect("modal", Modal)
inspect("notification", notification)
inspect("pagination", Pagination)
inspect("popconfirm", Popconfirm)
inspect("popover", Popover)
inspect("progress", Progress)
inspect("radio", Radio)
inspect("rate", Rate)
inspect("row", Row)
inspect("select", Select)
inspect("slider", Slider)
inspect("spin", Spin)
inspect("steps", Steps)
inspect("switch", Switch)
inspect("table", Table)
inspect("transfer", Transfer)
inspect("tree", Tree)
inspect("tree-select", TreeSelect)
inspect("tabs", Tabs)
inspect("tag", Tag)
inspect("time-picker", TimePicker)
inspect("timeline", Timeline)
inspect("tooltip", Tooltip)
inspect("mention", Mention)
inspect("upload", Upload)
inspect("version", version)