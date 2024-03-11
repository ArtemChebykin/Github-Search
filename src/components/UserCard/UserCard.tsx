import styles from "./UserCard.module.scss";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import { UserInfo } from "../UserInfo";
import { LocalGithubUser } from "../../types";
interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <UserTitle
        name={props.name}
        login={props.login}
        created={props.created}
      />
      <p className={`${styles.bio}${props.bio ? "" : `${styles.empty}`}`}>
        {props.bio || "This profile has no bio"}
      </p>

      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  );
};
