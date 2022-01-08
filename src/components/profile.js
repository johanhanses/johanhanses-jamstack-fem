import React from "react"
import { Link } from "gatsby"

export default function Profile() {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret stuff
        </Link>

        <Link to="/dashboard/base" activeClassName="active">
          See your base
        </Link>
      </nav>

      <span>TODO: Show login status </span>
    </div>
  )
}
