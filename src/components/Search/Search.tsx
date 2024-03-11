import SearchIcon from "../../assets/icon-search.svg?react";
import { Button } from "../Button";
import styles from "../Search/Search.module.scss";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="seach"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No Result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
