import { IPost } from "../../../types"
import { Button, CheckList, Box } from "../../../components"
import { IChecklistItemProps } from "../../../types"

interface IProps {
  CSVPosts: IPost[]
  suppliedPosts: IPost[],
  clickHandler: () => void,
  parsingError: string,
  fetchingError: string,
  loading: boolean
}

const Home: React.FC<IProps> = ({
  CSVPosts,
  suppliedPosts,
  clickHandler,
  parsingError,
  fetchingError,
  loading
}) => {
  const checkListItems: IChecklistItemProps[] = [
    {
      text: "Parsing CSV",
      active: Boolean(CSVPosts.length || parsingError),
      error: parsingError
    },
    {
      text: "Fetching Data",
      active: Boolean(suppliedPosts.length || fetchingError),
      error: fetchingError
    }
  ]

  return (
    <div className="flex items-center justify-center bg-gray-900 text-sm text-indigo-200 min-h-screen p-4">
      <Box>
        <div className="mb-6">
          <CheckList items={checkListItems} />
        </div>
        <Button
          text={loading ? "loading" : "Try"}
          onClick={clickHandler}
        />
      </Box>
    </div>
  );
}

export default Home;