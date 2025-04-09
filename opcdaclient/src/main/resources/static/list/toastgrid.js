
        document.addEventListener('DOMContentLoaded', function () {
            const gridData = [
                { itemid: 'New Alias3.New Item1', value: '532', quality: 'Good,native', timestamp: '2025-04-07 13:12:11', status: 'Active' },
                { itemid: 'New Alias1.New Item3', value: '2452', quality: 'Good,native', timestamp: '2025-04-05 18:11:56', status: 'Active' },
                { itemid: 'New Alias1.New Item2', value: '53232', quality: 'Good,native', timestamp: '2025-04-06 21:35:23', status: 'Active' },
                { itemid: 'New Alias2.New Item6', value: '1312', quality: 'Good,native', timestamp: '2025-04-01 00:52:18', status: 'Active' },
                { itemid: 'New Alias3.New Item4', value: '25432', quality: 'Good,native', timestamp: '2025-04-02 22:42:01', status: 'Active' }
            ];
            const grid = new tui.Grid({
                el: document.getElementById('grid'),
                data: gridData,
                scrollX: false,
                scrollY: false,
                columns: [
                    { header: 'ItemID', name: 'itemid', sortable: true },
                    { header: 'Value', name: 'value' },
                    { header: 'Quality', name: 'quality' },
                    { header: 'TimeStamp', name: 'timestamp', align: 'center' },
                    { header: 'Status', name: 'status' }
                ],
                rowHeaders: ['rowNum','checkbox'],
                columnOptions:{
                	resizable: true
                },
                contextMenu: ({}) => (
                	    [
                	      [                  
                	        {
                	          name: 'delete',
                	          label: 'delete tags',
                	          action: 'delete',
                	        },
                	      ],
                	    ]
                	  ),
                pageOptions: {
                    useClient: true,
                    perPage: 5
                }
            });
        });
