use sqlx::SqlitePool;

pub struct State {
    pub storage: SqlitePool,
}
