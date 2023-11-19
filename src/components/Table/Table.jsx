
import "./table.scss";

export function Table({children, name}) {
    return (
        <table className="admin-table">
            <thead>
                <tr className="table-row">
                    <th>#</th>
                    <th>ID</th>
                    <th>{name}</th>
                    <th>Yaratilgan sanasi</th>
                    <th>Holat</th>
                    <th style={{textAlign: 'right'}}>Qisqa sozlamalar</th>
                </tr>
            </thead>
            <tbody className="table-body">{children}</tbody>
        </table>
    )
}
