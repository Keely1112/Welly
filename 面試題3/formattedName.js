function formatName(firstName, lastName) {
  return `${firstName || ""} ${lastName || ""}`;
}

//以下原因是運用Template literals的好處

//第一：使程式碼簡潔易讀。可以運用${}來插入變數或文字，這邊運用邏輯運算子去確保是否firstName或lastName為空，若為空的話就用空字串替換。

//第二：可以進一步提高安全性。這種寫法有一定程度上防範XSS攻擊，因為在插入HTML前將可能為undefined或null的值替換為空字串，這有助於防止用戶提供的名字或姓氏中包含惡意腳本。
