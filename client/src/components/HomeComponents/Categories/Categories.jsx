import styles from "./categories.module.css";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className={styles.categories}>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="sale"
          />
          <button>
            <Link className="link" to="/products/sale">
              Sale
            </Link>
          </button>
        </div>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="women"
          />
          <button>
            <Link className="link" to="/products/women">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.row}>
          <img
            src="https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="men"
          />
          <button>
            <Link className="link" to="/products/men">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.colLarge}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/10508388/pexels-photo-10508388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="children"
              />
              <button>
                <Link className="link" to="/products/kids">
                  Kids
                </Link>
              </button>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.row}>
              <img
                src="https://images.pexels.com/photos/1503009/pexels-photo-1503009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="shoes"
              />
              <button>
                <Link className="link" to="/products/shoes">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
